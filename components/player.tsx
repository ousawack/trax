import ReactHowler from "react-howler";
import { useStoreActions } from "easy-peasy";
import { Box, Center, Button, ButtonGroup, IconButton, Flex, Text, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from "@chakra-ui/react";
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
      <Box color={"gray.600"}>
        <Flex justify={"center"} align="center">
          <Box width={"10%"}>
            <Text fontSize={"xs"}>1:21</Text>
          </Box>
          <Box width={"80%"}>
            <RangeSlider aria-label={["min", "max"]} step={0.1} max={321} id="player-change">
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg={"white"} />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width={'10%'} textAlign="right">
            <Text fontSize={"xs"}>321</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
