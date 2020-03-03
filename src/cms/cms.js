import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import { ProductPagePreview } from '../features/products/products.preview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import { CSSInjector } from '../helpers/preview-css-injector';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', (props) => (
  <CSSInjector>
    <ProductPagePreview {...props} />
  </CSSInjector>
));
CMS.registerPreviewTemplate('blog', BlogPostPreview);
