import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Grid, Typography, Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { userRequest } from "src/constants";

type incomeValue = {
  _id: number;
  total: number;
};

const PREFIX = "FeaturedInfo";

const StyledInfoWrapper = styled(Grid, {
  name: `${PREFIX}-StyledInfoWrapper`,
})(({ theme }) => ({
  padding: theme.spacing(3, 4),
  boxShadow: `0px 0px 5px ${theme.palette.secondary.light}`,
  width: "100%",
  backgroundColor: theme.palette.white.main,

  "&:not(:last-child)": {
    marginBottom: theme.spacing(3),
  },
}));

const StyledSum = styled(Typography, {
  name: `${PREFIX}-StyledSum`,
})(({ theme }) => ({
  fontSize: 25,
  fontFamily: "BitterBold",
  marginRight: theme.spacing(5),
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontSize: 20,
  marginBottom: theme.spacing(2),
  fontFamily: "BitterRegular",
}));

const StyledRangeWrapper = styled(Box, {
  name: `${PREFIX}-StyledRangeWrapper`,
})(({ theme }) => ({
  display: "flex",
}));

const StyledPerc = styled(Typography, {
  name: `${PREFIX}-StyledPerc`,
})(({ theme }) => ({
  fontSize: 20,
  fontFamily: "BitterMedium",
}));

const StyledText = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontSize: 20,
  color: theme.palette.secondary.main,
  fontFamily: "BitterMedium",
  marginTop: theme.spacing(2),
}));

export const FeaturedInfo = () => {
  const [income, setIncome] = useState<incomeValue[]>([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  return (
    <Grid container flexDirection="column" width="30%">
      <StyledInfoWrapper item>
        <StyledTitle>Revanue</StyledTitle>
        <StyledRangeWrapper>
          <StyledSum>${income[1]?.total ? income[1]?.total : 0}</StyledSum>
          <StyledPerc>
            %{Math.floor(perc)}{" "}
            {perc <= 0 ? (
              <ArrowDownward color="error" />
            ) : (
              <ArrowUpward color="success" />
            )}
          </StyledPerc>
        </StyledRangeWrapper>
        <StyledText>Compared to last month</StyledText>
      </StyledInfoWrapper>
      <StyledInfoWrapper item>
        <StyledTitle>Sales</StyledTitle>
        <StyledRangeWrapper>
          <StyledSum>$4,415</StyledSum>
          <StyledPerc>
            {" "}
            -1.4 <ArrowDownward color="error" />
          </StyledPerc>
        </StyledRangeWrapper>
        <StyledText>Compared to last month</StyledText>
      </StyledInfoWrapper>
      <StyledInfoWrapper item>
        <StyledTitle>Cost</StyledTitle>
        <StyledRangeWrapper>
          <StyledSum>$2,225</StyledSum>
          <StyledPerc>
            +2.4 <ArrowUpward color="success" />
          </StyledPerc>
        </StyledRangeWrapper>
        <StyledText>Compared to last month</StyledText>
      </StyledInfoWrapper>
    </Grid>
  );
};
