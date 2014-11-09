class UserMailer < ActionMailer::Base
  default from: "noreply@example.com"

  def account_activation(user)
    @user = user
    mail to: user.email, subject: "Sparked Account Activation"
  end

  def password_reset(user)
    @user = user
    mail to: user.email, subject: "Password reset"
  end
end
