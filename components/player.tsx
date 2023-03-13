import ReactHowler from "react-howler";
import { useStoreActions } from "easy-peasy";
import { Box, Center, Button, ButtonGroup, IconButton, Flex, Text, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from "@chakra-ui/react";
import { MdOutlinePauseCircleFilled, MdOutlinePlayCircleFilled, MdOutlineRepeat, MdShuffle, MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { useState, useRef } from "react";

export const Player = ({songs, activeSong}) => {

  const [playing, setPlaying] = useState(true)
  const [index, setIndex] = useState(0)
  const [seek, setSeek] = useState(0.0)
  const [repeat, setRepeat] = useState(false)
  const [shuffle, setShuffle] = useState(false)
  const [duration, setDuration] = useState(0.0)
  const soundRef = useRef(null)

  const setPlayState = (value) => {
    setPlaying(value)
  }

  const onShuffle = () => {
    setShuffle((state) => !state)
  }

  const onRepeat = () => {
    setRepeat((state) => !state)
  }

  const prevSong = () => {
    setIndex((state) => {
      return state ? state - 1 : songs.length - 1
    })
  }

  const nextSong = () => {
    setIndex((state : any) => {
      if (shuffle) {
        const next = Math.floor(Math.random() * songs.length)
        if (next === state) {
          return nextSong()
        }
        return next
      } else {
        return state === songs.length - 1 ? 0 : state + 1
      }
    })
  }

  return (
    <Box>
      <Box>
        <ReactHowler playing={playing} src={activeSong?.url} ref={soundRef} />
      </Box>
      <Center color={"gray.600"}>
        <ButtonGroup>
          <IconButton
            outline={"none"}
            variant="link"
            aria-label="shuffle"
            fontSize={"24px"}
            icon={<MdShuffle />}
            color={shuffle ? "white" : "gray.600"}
            onClick={onShuffle}
          />
          <IconButton
            outline={"none"}
            variant="link"
            aria-label="previous"
            fontSize={"24px"}
            icon={<MdSkipPrevious />}
            onClick={prevSong}
          />
          {playing ? (
          <IconButton
            outline={"none"}
            variant="link"
            aria-label="pause"
            fontSize={"40px"}
            color="white"
            icon={<MdOutlinePauseCircleFilled />}
            onClick={() => setPlayState(false)}
          />
          ) : (
          <IconButton
            outline={"none"}
            variant="link"
            aria-label="play"
            fontSize={"40px"}
            color="white"
            icon={<MdOutlinePlayCircleFilled />}
            onClick={() => setPlayState(true)}
          />
          )}
          <IconButton
            outline={"none"}
            variant="link"
            aria-label="next"
            fontSize={"24px"}
            icon={<MdSkipNext />}
            onClick={nextSong}
          />
          <IconButton
            outline={"none"}
            variant="link"
            aria-label="repeat"
            fontSize={"24px"}
            icon={<MdOutlineRepeat />}
            color={repeat ? "white" : "gray.600"}
            onClick={onRepeat}
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
