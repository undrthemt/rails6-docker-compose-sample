# routes.rbでdrawメソッドを使えるようにします。
# routes/以下にroutes.rbを分けて管理できるようになります。
class ActionDispatch::Routing::Mapper
  def draw(routes_name)
    instance_eval(File.read(Rails.root.join("config/routes/#{routes_name}.rb")))
  end
end