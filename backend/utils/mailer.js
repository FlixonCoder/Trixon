const nodemailer = require('nodemailer')

/**
 * Basic HTML escape to prevent injection
 */
const escapeHTML = (str = '') =>
    str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')

/**
 * Create transporter (explicit config — more reliable than `service: gmail`)
 */
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // MUST be true for port 465
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.GOOGLE_APP_PASSWORD
    }
})

    /**
     * Verify connection on startup
     */
    ; (async () => {
        try {
            await transporter.verify()
            console.log('✓ Email transporter ready')
        } catch (err) {
            console.error('✗ Email transporter error:', err.message)
        }
    })()

/**
 * Send a contact notification email
 */
const sendContactNotification = async ({ name, email, message }) => {
    const safeName = escapeHTML(name)
    const safeEmail = escapeHTML(email)
    const safeMessage = escapeHTML(message).replace(/\n/g, '<br>')

    return transporter.sendMail({
        from: `"Trixon Website" <${process.env.SMTP_USER}>`,
        to: process.env.NOTIFY_EMAIL,
        subject: `🔔 New Contact: ${safeName}`,
        html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Message:</strong><br>${safeMessage}</p>
      </div>
    `
    })
}

/**
 * Send a meeting scheduled notification email
 */
const sendMeetingNotification = async ({ name, email, message, date, time, meetLink }) => {
    const safeName = escapeHTML(name)
    const safeEmail = escapeHTML(email)
    const safeMessage = escapeHTML(message).replace(/\n/g, '<br>')
    const safeMeetLink = escapeHTML(meetLink)

    return transporter.sendMail({
        from: `"Trixon Website" <${process.env.SMTP_USER}>`,
        to: process.env.NOTIFY_EMAIL,
        subject: `📅 Meeting Scheduled: ${safeName} — ${date} at ${time}`,
        replyTo: safeEmail,
        html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
        <h2>📅 Meeting Scheduled</h2>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time} (IST)</p>
        <p><strong>Meet:</strong> <a href="${safeMeetLink}">${safeMeetLink}</a></p>
        <hr>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong><br>${safeMessage}</p>
      </div>
    `
    })
}

/**
 * Send a confirmation email to the user
 */
const sendUserConfirmation = async ({ name, email, date, time, meetLink, calendarUrl }) => {
    const safeName = escapeHTML(name)
    const safeMeetLink = escapeHTML(meetLink)
    const safeCalendar = escapeHTML(calendarUrl)

    return transporter.sendMail({
        from: `"Trixon" <${process.env.SMTP_USER}>`,
        to: email,
        subject: `Your strategy session is confirmed — ${date} at ${time}`,
        html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
        <h2>You're confirmed, ${safeName}!</h2>
        <p><strong>📅 ${date}</strong></p>
        <p><strong>🕐 ${time} (IST)</strong></p>

        <p>Join your meeting:</p>
        <p><a href="${safeMeetLink}">${safeMeetLink}</a></p>

        <p>Add to calendar:</p>
        <p><a href="${safeCalendar}">Google Calendar</a></p>
      </div>
    `
    })
}

module.exports = {
    sendContactNotification,
    sendMeetingNotification,
    sendUserConfirmation
}