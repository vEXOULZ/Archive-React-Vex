import { styled, Typography, Box } from "@mui/material";
import CustomLink from "./CustomLink";
import GitInfo from 'react-git-info/macro';

const gitInfo = GitInfo();

const Footer = styled((props) => (
  <Box {...props}>
    <Box sx={{ mt: 0.5 }}>
      <Typography variant="caption" color="textSecondary">
        {`${process.env.REACT_APP_CHANNEL} © ${new Date().getFullYear()}`}
      </Typography>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Typography variant="caption" color="textSecondary">
        <CustomLink href="https://twitter.com/overpowered" rel="noopener noreferrer" target="_blank">
          made by OP with 💜
        </CustomLink>
        &nbsp;|&nbsp;
        <CustomLink href="https://twitter.com/vexoulsad" rel="noopener noreferrer" target="_blank">
          edited by vEXOULZ with 🔪🩸
        </CustomLink>
      </Typography>
    </Box>
    <CustomLink href={`${process.env.REACT_APP_GITHUB}/commit/${gitInfo.commit.shortHash}`} rel="noopener noreferrer" target="_blank">
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
        <Typography variant="caption" color="textSecondary">
          {`Build Version: ${gitInfo.commit.shortHash}`}
        </Typography>
      </Box>
    </CustomLink>
  </Box>
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export default Footer;
