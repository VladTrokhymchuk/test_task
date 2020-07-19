const smartgrid = require('smart-grid');

const settings = {
    columns: 24,
    offset: '32px',
    container: {
        maxWidth: '980px',
        fields: '25px',
    },
    oldSizeStyle: false,

};

smartgrid('./src/precss', settings);