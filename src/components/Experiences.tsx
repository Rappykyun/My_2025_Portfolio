import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";

export function Experiences() {
  return (
    <div>
      <h1 className="text-4xl font-incognito font-bold pt-10 pb-4">
        {" "}
        Work Experience? Not Yet, but Soon! 🚀{" "}
      </h1>
      <Timeline
        position="alternate"
        sx={{
          //  for mobile
          "& .MuiTimelineItem-root": {
            minHeight: "120px",
          },
          "& .MuiSvgIcon-root": {
            fontSize: "1.5rem",
          },
          "& .MuiTypography-h6": {
            fontSize: "1rem",
          },
          "& .MuiTypography-body1": {
            fontSize: "1rem",
          },
          //  for desktop
          "@media (min-width: 768px)": {
            "& .MuiTimelineItem-root": {
              minHeight: "160px",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "2.5rem",
            },
            "& .MuiTypography-h6": {
              fontSize: "1.25rem",
            },
            "& .MuiTypography-body1": {
              fontSize: "1.25rem",
            },
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
            className="dark:text-zinc-100"
          >
            9:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Eat
            </Typography>
            <Typography>Because I need strength</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
            className="dark:text-zinc-100"
          >
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Code
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Tulog
            </Typography>
            <Typography>Because I need rest</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Repeat
            </Typography>
            <Typography>HAHAHAHAHA</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
