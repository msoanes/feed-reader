class SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(user_params)

    if user
      login(user)
      redirect_to root_url
    else
      @user = User.new(user_params)
      flash.now[:errors] = ["Invalid username or password"]
      render :new
    end
  end

  def new
    @user = User.new
  end

  def destroy
    logout
    redirect_to new_session_url
  end
end
