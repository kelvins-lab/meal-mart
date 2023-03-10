import {Anchor, Button, Container, createStyles, Group, Overlay, Text, TextInput, Title} from '@mantine/core';
import {MdOutlineSearch} from "react-icons/md";
import React from "react";
import Link from "next/link";
import {useMediaQuery} from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 800,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 8,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('md')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
      alignItems: 'center',
    },

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
      textAlign: 'center',
    },
  },

  title: {
    color: theme.white,
    fontSize: 48,
    fontWeight: 700,
    lineHeight: 1.1,

    [theme.fn.smallerThan('md')]: {
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    fontSize: 24,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.lg,
    },
  },

  control: {
    marginTop: theme.spacing.xl,
    width: 600,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  trending: {
    color: theme.white,
    marginTop: theme.spacing.md,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  }
}));

function Hero() {
  const {classes} = useStyles();
  const mediumScreen = useMediaQuery('(max-width: 769px)');

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Delivery or Takeaway Food.</Title>
        <Text className={classes.description} size="xl" mt="xl">The best restaurants at the best price.</Text>
        <TextInput
          className={classes.control}
          icon={<MdOutlineSearch size={24}/>}
          size={mediumScreen ? 'lg' : 'xl'}
          rightSection={
            <Button size={mediumScreen ? 'sm' : 'md'} variant="white" component={Link} href="feed">Search</Button>
          }
          placeholder="what are you looking for..."
          rightSectionWidth={mediumScreen ? 90 : 110}
        />
        <Group className={classes.trending} spacing="sm">
          <Text>Trending searches: </Text>
          <Text component={Anchor}>Burger,</Text>
          <Text component={Anchor}>KFC,</Text>
          <Text component={Anchor}>Sushi,</Text>
          <Text component={Anchor}>Pizza,</Text>
          <Text component={Anchor}>Fries</Text>
        </Group>
      </Container>
    </div>
  );
}

export default Hero;
