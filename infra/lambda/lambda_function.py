import base64
import boto3
import os
from urllib.parse import unquote, parse_qs

sns_client = boto3.client("sns")

def lambda_handler(event, context):
    '''A function to handle registrations for the wedding'''
    print(event)
    body = event.get('body')
    decode_body = base64.b64decode(body)
    sns_topic_arn = os.getenv('SNS_TOPIC_ARN')
    print(decode_body)
    message = decode_body.decode('utf-8').replace('+', ' ')
    print(f'Before unquote\n{message}')
    message = unquote(message)
    print(f'After unquote:\n{message}')
    subject = "Confirmation reservation mariage"


    parsed_data = parse_qs(message)
    parsed_data = {key: val if len(val) > 1 else val[0] for key, val in parsed_data.items()}
    print(f'{parsed_data=}')
    values_dict = {y.split('=')[0]:y.split('=')[1] for y in message.split('&')}
    
    confirmation = True if 'presences[]' in parsed_data else False
    user_name = parsed_data.get('guest_name') # values_dict.get('Name')
    user_message = parsed_data.get('guest_message') # values_dict.get('Message')

    if confirmation:
        presences = ''
        if isinstance(parsed_data.get('presences[]'), list):
            for p in parsed_data.get('presences[]'):
                presences = presences + f'- {p}\n'
        else:
            presences = f'- {parsed_data.get("presences[]")}' 
        message = f'''{user_name} confirme sa présence aux événements suivants:\n
{presences}
Voici son message: {user_message}.
'''
    else:
        message = f'{user_name} ne pourra pas etre présent.\n\nVoici son message: {user_message}'

    try:
        sns_client.publish(
            TopicArn=sns_topic_arn,
            Message=message,
            Subject=subject
        )
        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "text/html",
                # "Location": "https://wedding-project-swart.vercel.app/"  # Allowed headers
            },
            "body": '''
                <html>
                    <head>
                        <meta http-equiv="refresh" content="0; url=https://francine-et-roderic.vercel.app/">
                    </head>
                </html>
            '''
        }
    except Exception as e:
        return {
            "statusCode": 500,
            "body": f"Failed to send email: {str(e)}"
        }
