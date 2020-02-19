# Rails6から名前推論の方法が変更されていて、定数のAPIを大文字として使う場合Inflectorに設定が必要です。
# @link https://qiita.com/alfa/items/3a432c31346a705d0690
# Rails.autoloaders.each do |autoloader|
#   autoloader.inflector.inflect(
#       "api" => "API"
#   )
# end