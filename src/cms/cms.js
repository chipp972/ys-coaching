import { ThemeProvider } from '@material-ui/core/styles';
import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import { CSSInjector } from '../common/helpers/preview-css-injector';
import { theme } from '../common/theme';
import { AboutPagePreview } from '../features/about/about.preview';
import { BlogPostPreview } from '../features/blog/blog.preview';
import { IndexPagePreview } from '../features/home/home.preview';
import { ProductPagePreview } from '../features/products/products.preview';
import { BetterMarkdownImage } from './better-markdown-image';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerEditorComponent(BetterMarkdownImage);

const PreviewWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSInjector>{children}</CSSInjector>
  </ThemeProvider>
);

CMS.registerPreviewTemplate('products', (props) => (
  <PreviewWrapper>
    <ProductPagePreview {...props} />
  </PreviewWrapper>
));

CMS.registerPreviewTemplate('about', (props) => (
  <PreviewWrapper>
    <AboutPagePreview {...props} />
  </PreviewWrapper>
));

CMS.registerPreviewTemplate('index', (props) => (
  <PreviewWrapper>
    <IndexPagePreview {...props} />
  </PreviewWrapper>
));

CMS.registerPreviewTemplate('blog', (props) => (
  <PreviewWrapper>
    <BlogPostPreview {...props} />
  </PreviewWrapper>
));
