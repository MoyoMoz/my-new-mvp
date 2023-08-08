import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

// ...

// Inside your component rendering:
<header class="w3-container w3-xlarge w3-padding-24">
  <a href="#" class="w3-left w3-button w3-white">MY ART</a>
  <a href="#about" class="w3-right w3-button w3-white">About</a>
  <LogoutButton className="w3-right w3-button w3-white" />
  <LoginButton className="w3-right w3-button w3-white" />
</header>
