import { styled } from '../styles/stiches.config';
import * as PlayerCss from '../styles/components/PlayerCss';
import Image from 'next/image';
import * as FaIcon from 'react-icons/fa';
import allSongs from '../../db.json';
import { useEffect, useRef, useState } from 'react';
import { shufflePlaylist } from '../utils/shufflePlayList';

const Root = styled('div', PlayerCss.Root);
const Container = styled('div', PlayerCss.Container);
const InfoSection = styled('div', PlayerCss.InfoSection);
const Content = styled('div', PlayerCss.Content);
const ControlSection = styled('div', PlayerCss.ControlSection);
const Button = styled('button', PlayerCss.Button);

const playlist = shufflePlaylist(allSongs);

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const song = playlist[currentSongIndex];
  const hasNext = currentSongIndex + 1 < playlist.length;

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function playNext() {
    if (hasNext) {
      setCurrentSongIndex(currentSongIndex + 1);
    } else {
      setCurrentSongIndex(0);
    }
  }

  function handleSongEnded() {
    playNext();
  }

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <Root>
      <Container>
        <InfoSection>
          <Image src={song.thumbnail} width={48} height={48} objectFit="cover" alt="" />
          <Content>
            <strong>{song.name}</strong>
            <span>{song.singer}</span>
          </Content>
        </InfoSection>
        <ControlSection>
          <Button onClick={togglePlay}>{isPlaying ? <FaIcon.FaPause /> : <FaIcon.FaPlay />}</Button>
          <Button onClick={playNext}>
            <FaIcon.FaStepForward />
          </Button>
        </ControlSection>
        {song && (
          <audio
            style={{
              visibility: 'hidden',
            }}
            autoPlay
            src={song.url}
            ref={audioRef}
            onEnded={handleSongEnded}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        )}
      </Container>
    </Root>
  );
}
