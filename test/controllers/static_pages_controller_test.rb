require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  
  def setup
    @base_title = "SparkEd"
  end  

  test "should get home" do
    get :home
    assert_response :success
    assert_select "title", "Home | #{base_title}"
  end

  test "should get about" do
    get :about
    assert_response :success
    assert_select "title", "About | #{base_title}"
  end

  test "should get programs" do
    get :programs
    assert_response :success
    assert_select "title", "Programs | #{base_title}"    
  end

  test "should get faq" do
    get :faq
    assert_response :success
    assert_select "title", "FAQ | #{base_title}"    
  end

end
