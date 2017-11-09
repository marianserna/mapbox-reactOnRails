# frozen_string_literal: true

class MapController < ApplicationController

  def index
    @map_props = { name: "Stranger" }
  end
end
