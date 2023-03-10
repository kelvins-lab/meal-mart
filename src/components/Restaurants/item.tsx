import React from 'react';
import {Badge, createStyles, Flex, Group, Image, Paper, Stack, Text, ThemeIcon} from "@mantine/core";
import Link from "next/link";
import {MdOutlineLocalFireDepartment, MdOutlineStar} from "react-icons/md";
import {useMediaQuery} from "@mantine/hooks";

const useStyles = createStyles((theme, _params, getRef) => ({
  title: {
    ref: getRef('title'),
  },

  card: {
    boxShadow: theme.shadows.sm,
    // backgroundColor: theme.colors.gray[0],

    '&:hover': {
      transform: 'scale(1.03)',
      transition: 'all ease 200ms',
      boxShadow: theme.shadows.lg,
    },

    [`&:hover .${getRef('title')}`]: {
      fontWeight: 800
    },
  }
}))

interface IProps {
  link: string
  imageUrl: string[]
  type: string
  avgPrice: number
  ratings: string
  title: string
  location: string
}

function RestaurantCard({avgPrice, ratings, type, imageUrl, link, title, location}: IProps) {
  const {classes} = useStyles();
  const mediumScreen = useMediaQuery('(max-width: 769px)');

  return (
    <Paper component={Link} href={`/${link}`} className={classes.card} p={mediumScreen ? 'md' : 0}>
      <Flex align="center" direction={mediumScreen ? 'column' : 'row'}>
        <Image
          src={imageUrl[0]}
          alt={`photo of ${title}`}
          radius="sm"
          height={mediumScreen ? 300 : 200}
          width={mediumScreen ? '100%' : 200}
          mb={mediumScreen ? 'md' : 0}/>
        <Stack mx="md" sx={{width: '100%'}}>
          <Flex justify="space-between" align="center">
            <Text size="sm" transform="capitalize">{type}</Text>
            <Group position="right" spacing="xs">
              <ThemeIcon variant="outline"><MdOutlineStar/></ThemeIcon>
              <Text size="sm">{ratings}</Text>
            </Group>
          </Flex>
          <Text size="lg" weight={500} className={classes.title}>{title}</Text>
          <Text>{location}</Text>
          <Flex justify="space-between" align="center">
            <Badge size="lg" radius="sm" variant="outline"><MdOutlineLocalFireDepartment/> -30%</Badge>
            <Text size="sm" ml="md">Avg. price ${avgPrice}</Text>
          </Flex>
        </Stack>
      </Flex>
    </Paper>
  );
}

export default RestaurantCard;
