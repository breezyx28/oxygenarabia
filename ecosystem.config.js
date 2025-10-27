module.exports = {
  apps: [{
    name: 'oxygen-seo',
    script: './server/index.mjs',
    cwd: './Oxygen',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};