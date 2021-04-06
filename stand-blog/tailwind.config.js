module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       textColor: theme => theme('colors'),
       textColor: {
         'primary': '#f48840',
       },
       backgroundImage: theme => ({
        'catalog-image': "url('/assets/cta-bg.jpg')",
        'banner-1':"url('/assets/banner-item-01.jpg')",
        'banner-2':"url('/assets/banner-item-02.jpg')",
        'banner-3':"url('/assets/banner-item-03.jpg')",
        'module-banner-img':"url('/assets/module-banner-image.jpg')"
       }),
       backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#20232e',
        'secondary': '#f48840',
        // 'danger': '#e3342f',
       }),
       borderWidth: {
        DEFAULT: '1px',
        '0':'1px',
        
      }

       
    },
  },
  variants: {
    extend: {
     
    },
   
  },
  plugins: [],
}
