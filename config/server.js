module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // 设置生产环境的完整外部 URL
  url: env('https://typical-sharing-fb0a62d1ce.strapiapp.com'), // 确保环境变量 MY_HEROKU_URL 已设置
  admin: {
    // 允许在生产环境访问 Admin 面板的 Content-Type Builder 等功能
    allowAdminGeneratedContent: true,
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
