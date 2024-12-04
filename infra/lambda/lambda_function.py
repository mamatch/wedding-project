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
    message = decode_body.decode('utf-8').replace('+', ' ')
    subject = "Confirmation reservation mariage"

    values_dict = {y.split('=')[0]:y.split('=')[1] for y in message.split('&')}
    
    confirmation = True if values_dict.get('Attend wedding') == 'on' else False
    user_name = values_dict.get('Name')
    user_message = values_dict.get('Message')
    if confirmation:
        message = f'{user_name} a confirme sa presence.\n\n{"Voici son message: " + user_message if message else None}'
    else:
        message = f'{user_name} ne pourra pas etre present.\n\n{"Voici son message: " + user_message if message else None}'

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
