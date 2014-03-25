set :application, 'selfie'
set :repo_url, "git@github.com:alanmulhall/devart-template.git"

set :user, 'alanmulhall'
role :app, "23.251.152.185"

set :deploy_to, "/home/alanmulhall/selfie"
set :scm, :git

set :scm, "git"
set :branch, "master"

set :format, :pretty
set :log_level, :debug
set :pty, true
set :keep_releases, 5
set :use_sudo, false

namespace :deploy do

  desc "Stop Forever"
  task :started do
    on roles(:app) do
      execute "/home/alanmulhall/.nvm/v0.10.26/bin/forever stopall; true"
    end
  end

  desc "Install node modules non-globally"
  task :npm_install do
    on roles(:app) do
      execute "cd /home/alanmulhall/selfie/current/project_code/selfie && /home/alanmulhall/.nvm/v0.10.26/bin/npm install"
    end
  end

  desc 'Start Forever'
  task :restart do
    on roles(:app) do
      execute "cd /home/alanmulhall/selfie/current/project_code/selfie/ && forever start app.js"
    end
  end

  before :restart, 'deploy:npm_install'

end

set :stage, :production

set :default_enviorment, {
  'NODE_ENV' => 'production'
}

server '23.251.152.185', user: 'alanmulhall', roles: %w{web app}

server '23.251.152.185',
  user: 'alanmulhall',
  roles: %w{web app},
  ssh_options: {
    keys: %w(~/.ssh/google_compute_engine),
    forward_agent: true,
    auth_methods: %w(publickey password),
    #password: 'use a key instead'
  }
