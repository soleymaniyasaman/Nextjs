module.exports = {
    async rewrites() {
      return [
        {
          source: `/${encodeURI("قیمت-گوشی-موبایل")}`,
          destination: '/price',
        },
        {
          source: `/${encodeURI("قیمت-گوشی-اپل")}`,
          destination: '/price',
        },
        {
          source: `/${encodeURI("قیمت-گوشی-سامسونگ")}`,
          destination: '/price',
        },
        {
          source: `/${encodeURI("قیمت-گوشی-هوآوی")}`,
          destination: '/price',
        },
        {
          source: `/${encodeURI("قیمت-گوشی-شیاومی")}`,
          destination: '/price',
        },
        {
          source: `/${encodeURI("قیمت-گوشی-نوکیا")}`,
          destination: '/price',
        },
        {
          source: `/${encodeURI("قیمت-گوشی-آنر")}`,
          destination: '/price',
        },

      ]
    },
  }
