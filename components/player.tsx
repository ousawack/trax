import ReactHowler from "react-howler";
import { useStoreActions } from "easy-peasy";
import { Box, Center, Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { MdOutlinePauseCircleFilled, MdOutlinePlayCircleFilled, MdOutlineRepeat, MdShuffle, MdSkipNext, MdSkipPrevious } from "react-icons/md";

export const Player = () => {
  return (
    <Box>
      <Box>{/* <ReactHowler /> */}</Box>
      <Center color={"gray.600"}>
        <ButtonGroup>
          <IconButton
            outline={"none"}
            variant="link"
            aria-label="shuffle"
            fontSize={"24px"}
            icon={<MdShuffle />}
          />
          <IconButton
            outline={"none"}
            variant="link"
            aria-label="previous"
            fontSize={"24px"}
            icon={<MdSkipPrevious />}
          />
          <IconButton
            outline={"none"}
            variant="link"
            aria-label="play"
            fontSize={"40px"}
            color="white"
            icon={<MdOutlinePlayCircleFilled />}
          />
          <IconButton
            outline={"none"}
            variant="link"
            aria-label="pause"
            fontSize={"40px"}
            color="white"
            icon={<MdOutlinePauseCircleFilled />}
          />
          <IconButton
            outline={"none"}
            variant="link"
            aria-label="next"
            fontSize={"24px"}
            icon={<MdSkipNext />}
          />
          <IconButton
            outline={"none"}
            variant="link"
            aria-label="repeat"
            fontSize={"24px"}
            icon={<MdOutlineRepeat />}
          />
        </ButtonGroup>
      </Center>
    </Box>
  );
};
