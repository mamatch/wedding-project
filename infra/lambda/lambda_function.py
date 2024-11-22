import base64
import boto3
import os

sns_client = boto3.client("sns")

def lambda_handler(event, context):
    '''A function to handle registrations for the wedding'''
    print(event)
    body = event.get('body')
    decode_body = base64.b64decode(body)
    sns_topic_arn = os.getenv('SNS_TOPIC_ARN')
    print(decode_body)
    message = decode_body
    subject = "Test Email from Lambda"

    try:
        sns_client.publish(
            TopicArn=sns_topic_arn,
            Message=message,
            Subject=subject
        )
        return {
            "statusCode": 200,
            "body": "Email sent successfully via SNS!"
        }
    except Exception as e:
        return {
            "statusCode": 500,
            "body": f"Failed to send email: {str(e)}"
        }
