import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import { CSSInjector } from '../common/helpers/preview-css-injector';
import { ProductPagePreview } from '../features/products/products.preview';
import { AboutPagePreview } from '../features/about/about.preview';
import { BlogPostPreview } from '../features/blog/blog.preview';
import { IndexPagePreview } from '../features/home/home.preview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('products', (props) => (
  <CSSInjector>
    <ProductPagePreview {...props} />
  </CSSInjector>
));

CMS.registerPreviewTemplate('about', (props) => (
  <CSSInjector>
    <AboutPagePreview {...props} />
  </CSSInjector>
));

CMS.registerPreviewTemplate('index', (props) => (
  <CSSInjector>
    <IndexPagePreview {...props} />
  </CSSInjector>
));

CMS.registerPreviewTemplate('blog', (props) => (
  <CSSInjector>
    <BlogPostPreview {...props} />
  </CSSInjector>
));
