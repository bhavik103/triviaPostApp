//
//  NotificationService.m
//  serviceExtension
//
//  Created by Rao Mac 1 on 28/11/19.
//

#import "NotificationService.h"

@interface NotificationService ()

@property (nonatomic, strong) void (^contentHandler)(UNNotificationContent *contentToDeliver);
@property (nonatomic, strong) UNMutableNotificationContent *bestAttemptContent;

@end

@implementation NotificationService

- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler {
    NSLog(@"enter in extension");
    self.contentHandler = contentHandler;
    self.bestAttemptContent = [request.content mutableCopy];
    
    NSDictionary *data = [request.content.userInfo objectForKey:@"fcm_options"];
    NSLog(@"fcm-option = %@",data);
    NSString *attachmentUrlString = [data objectForKey:@"image"];
    NSLog(@"image = %@",attachmentUrlString);
    
    if (![attachmentUrlString isKindOfClass:[NSString class]])
        return;

    NSURL *url = [NSURL URLWithString:attachmentUrlString];
    if (!url)
        return;

    [[[NSURLSession sharedSession] downloadTaskWithURL:url completionHandler:^(NSURL * _Nullable location, NSURLResponse * _Nullable response, NSError * _Nullable error) {
        if (!error) {
            NSString *tempDict = NSTemporaryDirectory();
            NSString *attachmentID = [[[NSUUID UUID] UUIDString] stringByAppendingString:[response.URL.absoluteString lastPathComponent]];
            
            if(response.suggestedFilename)
                attachmentID = [[[NSUUID UUID] UUIDString] stringByAppendingString:response.suggestedFilename];

            NSString *tempFilePath = [tempDict stringByAppendingPathComponent:attachmentID];

            if ([[NSFileManager defaultManager] moveItemAtPath:location.path toPath:tempFilePath error:&error]) {
                UNNotificationAttachment *attachment = [UNNotificationAttachment attachmentWithIdentifier:attachmentID URL:[NSURL fileURLWithPath:tempFilePath] options:nil error:&error];

                if (!attachment) {
                    NSLog(@"Create attachment error: %@", error);
                } else {
                    self->_bestAttemptContent.attachments = [self->_bestAttemptContent.attachments arrayByAddingObject:attachment];
                }
            } else {
                NSLog(@"Move file error: %@", error);
            }
        } else {
            NSLog(@"Download file error: %@", error);
        }

        [[NSOperationQueue mainQueue] addOperationWithBlock:^{
            self.contentHandler(self.bestAttemptContent);
        }];
    }] resume];
}

- (void)serviceExtensionTimeWillExpire {
    // Called just before the extension will be terminated by the system.
    // Use this as an opportunity to deliver your "best attempt" at modified content, otherwise the original push payload will be used.
    self.contentHandler(self.bestAttemptContent);
}

@end
