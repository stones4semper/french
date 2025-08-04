<?php
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type');

    require_once __DIR__."/PHPMailer/Exception.php";
    require_once __DIR__."/PHPMailer/PHPMailer.php";
    require_once __DIR__."/PHPMailer/SMTP.php";
    require_once __DIR__."/constants.php";

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    $response = ['success' => false, 'message' => ''];

    // Only handle POST requests
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        $response['message'] = 'Method not allowed';
        http_response_code(405);
        echo json_encode($response);
        exit;
    }

    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);

    // Validate input
    if (empty($input['name']) || empty($input['email']) || empty($input['message'])) {
        $response['message'] = 'Missing required fields';
        http_response_code(400);
        echo json_encode($response);
        exit;
    }

    if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
        $response['message'] = 'Invalid email format';
        http_response_code(400);
        echo json_encode($response);
        exit;
    }

    try {
        $mail = new PHPMailer(true);
        
        // Server settings
        $mail->isSMTP();
        $mail->Host       = $email_host; 
        $mail->SMTPAuth   = true;
        $mail->Username   = $email_user; 
        $mail->Password   = $email_password; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = $email_port;
        
        // Recipients
        $mail->setFrom($email_user, 'Website Contact Form');
        $mail->addAddress($email_user, $input['name']);
        $mail->addReplyTo($input['email'], $input['name']);
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        
        $mail->Body = <<<HTML
            <!DOCTYPE html>
            <html>
                <head>
                    <style>
                        body {
                            font-family: 'Georgia', serif;
                            line-height: 1.6;
                            color: #000000;
                            background-color: #f5f5f5;
                            margin: 0;
                            padding: 0;
                        }
                        .email-container {
                            max-width: 600px;
                            margin: 20px auto;
                            background-color: #ffffff;
                            border-radius: 8px;
                            overflow: hidden;
                            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                        }
                        .email-header {
                            background-color: #864d13;
                            color: #ffffff;
                            padding: 30px 20px;
                            text-align: center;
                        }
                        .email-content {
                            padding: 30px;
                        }
                        .detail-row {
                            margin-bottom: 20px;
                            display: flex;
                            align-items: flex-start;
                        }
                        .label {
                            font-weight: bold;
                            color: #4e6c37;
                            min-width: 100px;
                            padding-right: 15px;
                        }
                        .value {
                            flex: 1;
                        }
                        .message-content {
                            background-color: #f9f9f9;
                            padding: 20px;
                            border-radius: 6px;
                            border-left: 4px solid #4e6c37;
                            margin-top: 10px;
                            font-style: italic;
                        }
                        .footer {
                            text-align: center;
                            padding: 20px;
                            font-size: 12px;
                            color: #666666;
                            background-color: #f0f0f0;
                            border-top: 1px solid #e0e0e0;
                        }
                        h1 {
                            margin: 0;
                            font-weight: normal;
                            letter-spacing: 1px;
                        }
                        a {
                            color: #864d13;
                            text-decoration: none;
                        }
                        a:hover {
                            text-decoration: underline;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="email-header">
                            <h1>New Contact Message</h1>
                        </div>
                        
                        <div class="email-content">
                            <div class="detail-row">
                                <div class="label">From:</div>
                                <div class="value">
                                    <strong>{$input['name']}</strong><br>
                                    <a href="mailto:{$input['email']}">{$input['email']}</a>
                                </div>
                            </div>
                            
                            <div class="detail-row">
                                <div class="label">Phone:</div>
                                <div class="value">
                                    {($input['phone'] ?? '<em>Not provided</em>')}
                                </div>
                            </div>
                            
                            <div class="detail-row" style="flex-direction: column;">
                                <div class="label">Message:</div>
                                <div class="message-content">
                                    {$input['message']}
                                </div>
                            </div>
                        </div>
                        
                        <div class="footer">
                            <p>This message was sent via your website contact form on {date('F j, Y')}</p>
                            <p style="margin-top: 10px;">© {date('Y')} Your Organization. All rights reserved.</p>
                        </div>
                    </div>
                </body>
            </html>
        HTML;
        
        $mail->AltBody = "
            New Contact Form Submission\n
            Name: {$input['name']}\n
            Email: {$input['email']}\n
            Phone: " . ($input['phone'] ?? 'Not provided') . "\n
            Message:\n{$input['message']}
        ";
        
        $mail->send();
        
        $response['success'] = true;
        $response['message'] = 'Message has been sent';
        echo json_encode($response);
        
    } catch (Exception $e) {
        $response['message'] = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        http_response_code(500);
        echo json_encode($response);
    }