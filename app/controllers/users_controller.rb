class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      cookies.permanent[:auth_token] = @user.auth_token
      redirect_to root_url, notice: "Thank you for signing up!"
    else
      render "New"
    end
  end






  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
