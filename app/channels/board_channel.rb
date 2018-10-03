class BoardChannel < ApplicationCable::Channel
  def subscribed
    stop_all_streams
    if params[:board_id].nil?
      stream_from "boards"
    else
      stream_from "board_#{params[:board_id]}"
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_all_streams
  end
end
