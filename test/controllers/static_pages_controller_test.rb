require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  
  def setup
    @base_title = "SparkEd"
  end  

  test "should get home" do
    get :home
    assert_response :success
    assert_select "title", "SparkEd"
    assert_select "title", "Home | SparkEd"
  end

  test "should get about" do
    get :about
    assert_response :success
    assert_select "title", "About | SparkEd"
  end

  test "should get programs" do
    get :programs
    assert_response :success
    assert_select "title", "Programs | SparkEd"    
  end

  test "should get faq" do
    get :faq
    assert_response :success
    assert_select "title", "FAQ | SparkEd"    
  end

  test "should get contact" do
    get :contact
    assert_response :success
    assert_select "title", "Contact | SparkEd"
  end

end
