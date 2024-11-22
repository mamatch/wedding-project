def lambda_handler(event, context):
    '''A function to handle registrations for the wedding'''
    print(event)
    return {
        "statusCode": 200,
        "body": "Hello, world!"
    }
