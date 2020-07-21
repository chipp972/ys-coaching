import { LoadingStatus } from '../components/Button';
import { getReCaptchaToken, ReCaptchaAction } from './recaptcha';

export const handleFormSubmitWithRecaptcha = ({
  action,
  endpoint
}: { action: ReCaptchaAction; endpoint: string }) =>
  async (formData) => {
    const recaptchaToken = await getReCaptchaToken(action);
  
    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ ...formData, recaptchaToken })
    });

    if (!response.ok) {
      return LoadingStatus.ERROR;
    }

    const result = await response.json();

    if (result.response?.Messages?.[0].Status !== 'success') {
      return LoadingStatus.ERROR;
    }
    return LoadingStatus.SUCCESS;
  };
