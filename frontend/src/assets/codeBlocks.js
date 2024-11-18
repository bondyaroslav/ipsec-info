export const complexCodeBlocks = {
    option2: `wget https://get.vpnsetup.net -O vpn.sh
nano -w vpn.sh
[Replace with your own values: YOUR_IPSEC_PSK, YOUR_USERNAME and YOUR_PASSWORD]
sudo sh vpn.sh
`,
    option3: `# All values MUST be placed inside 'single quotes'
# DO NOT use these special characters within values: \\ " '
wget https://get.vpnsetup.net -O vpn.sh
sudo VPN_IPSEC_PSK='your_ipsec_pre_shared_key' \\
VPN_USER='your_vpn_username' \\
VPN_PASSWORD='your_vpn_password' \\
sh vpn.sh`
}