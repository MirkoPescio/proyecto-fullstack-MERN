import { Typography, useTheme } from "@mui/material";

import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Patrocinado
        </Typography>
        <Typography color={medium}>Agregar Anuncio</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="propaganda"
        src="https://api.sweetpress.com/image/1643975950828-KITKAT-global-partner-Giants.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>KitKat</Typography>
        <Typography color={medium}>Have a break, have a kitkat</Typography>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
