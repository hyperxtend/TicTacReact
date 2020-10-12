import styled from 'styled-components';

import BackgroundImage from '../../assets/shared-assets/img_background.png';

const SiteContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-position: initial;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default SiteContainer;
