var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'less',
    /* less || scss || sass || styl */
    columns: 12,
    /* number of grid columns */
    offset: '30px',
    /* gutter width px || % || rem */
    mobileFirst: false,
    /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1300px',
        /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        xxl: {
            width: '1380px',
            /* -> @media (max-width: 1100px) */
        },
        xl: {
            width: '1200px',
            /* -> @media (max-width: 1100px) */
        },
        lg: {
            width: '1100px',
            /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '992px'
        },
        gallery: {
            width: '830px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        sm: {
            width: '768px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '576px'
        },
        xxs: {
            width: '480px'
        },
        iphone: {
            width: '330px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

smartgrid('./', settings);