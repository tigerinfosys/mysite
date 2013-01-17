# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'mysite/version'

Gem::Specification.new do |gem|
  gem.name          = "mysite"
  gem.version       = Mysite::VERSION
  gem.authors       = ["yunnuy"]
  gem.email         = ["yunnuy.com@gmail.com"]
  gem.description   = %q{a powerful static site generator}
  gem.summary       = %q{a powerful static site generator}
  gem.homepage      = ""

  gem.files         = `git ls-files`.split($/)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.require_paths = ["lib"]
end
