import Wrapper from "@/layout";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  createStyles,
  FileInput,
  Flex,
  LoadingOverlay,
  MantineTheme,
  Paper,
  Rating,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
  Tooltip
} from "@mantine/core";
import {MdHelp, MdSend} from "react-icons/md";
import {useMediaQuery} from "@mantine/hooks";
import {showNotification} from "@mantine/notifications";
import React, {useState} from "react";
import Head from "next/head";

const useStyles = createStyles((theme: MantineTheme) => ({
  card: {
    boxShadow: theme.shadows.sm,
    position: 'relative',
    // backgroundColor: theme.colors.gray[0]
  }
}))

export default function Create() {
  const {classes, theme} = useStyles();
  const smallScreen = useMediaQuery('(max-width: 426px)');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showNotification({
        title: 'Form submitted',
        message: 'Hey there, you are doing great! 🤥',
      });
    }, 3000);
  }

  return (
    <>
      <Head>
        <title>Meal Mart | Write Review</title>
      </Head>
      <Wrapper>
        <Box sx={{backgroundColor: theme.colors.gray[0]}}>
          <Container pt={80} pb={120}>
            <Paper className={classes.card} p={smallScreen ? 0 : "md"}>
              <LoadingOverlay visible={loading}/>
              <Card.Section p="lg">
                <Title size={smallScreen ? 28 : 36} align="center" mb="md">Write a review for &quot;Pinocchio&apos;s
                  Servings&quot;</Title>
                <Text size={smallScreen ? 'md' : 'lg'} align="center">Product reviews help the rest of us make great
                  decisions. Not sure where to start</Text>
              </Card.Section>
              <Card.Section p={smallScreen ? "md" : "lg"}>
                <Stack>
                  <SimpleGrid
                    cols={3}
                    spacing="lg"
                    mb="md"
                    breakpoints={[
                      {maxWidth: 'md', cols: 2, spacing: 'md'},
                      {maxWidth: 'sm', cols: 1, spacing: 'sm'},
                      {maxWidth: 'xs', cols: 1, spacing: 'sm'},
                    ]}>
                    <Box>
                      <Flex>
                        <Text>Overall quality</Text>
                        <Tooltip label="How well has this software helped you achieve your business goals?">
                          <ActionIcon><MdHelp/></ActionIcon>
                        </Tooltip>
                      </Flex>
                      <Rating/>
                    </Box>
                    <Box>
                      <Flex>
                        <Text>Ease of use</Text>
                        <Tooltip label="How easy was this software to learn?">
                          <ActionIcon><MdHelp/></ActionIcon>
                        </Tooltip>
                      </Flex>
                      <Rating/>
                    </Box>
                    <Box>
                      <Flex>
                        <Text>Features & Functionality</Text>
                        <Tooltip label="How well do the features & functionality fit your business?">
                          <ActionIcon><MdHelp/></ActionIcon>
                        </Tooltip>
                      </Flex>
                      <Rating/>
                    </Box>
                    <Box>
                      <Flex>
                        <Text>Customer support (Optional)</Text>
                        <Tooltip label="How satisfied are you with the quality of the support you receive?">
                          <ActionIcon><MdHelp/></ActionIcon>
                        </Tooltip>
                      </Flex>
                      <Rating/>
                    </Box>
                    <Box>
                      <Flex>
                        <Text>Value for money (Optional)</Text>
                        <Tooltip
                          label="How would you describe the value you are receiving for the software investment?">
                          <ActionIcon><MdHelp/></ActionIcon>
                        </Tooltip>
                      </Flex>
                      <Rating/>
                    </Box>
                  </SimpleGrid>
                  <TextInput label="Title of your review" placeholder="keep the title simple and summarized"/>
                  <Textarea label="Your review" placeholder="write your review here" minRows={4} maxRows={6}/>
                  <FileInput placeholder="choose image file" label="Add screenshot (optional)"/>
                  <Checkbox
                    label="By submitting this review, I certify to Meal Mart and its affiliates (“Meal Mart”) that: I’m the person I represent to be; (ii) my feedback is based on my own experience with this product; (iii) my participation in this program is governed by the Community Guidelines and General User Terms; and (iv) Meal Mart will use my personal information to administer my participation in this program and for future communications per the Meal Mart Privacy Policy."/>
                  <Button leftIcon={<MdSend/>} size="md" mt="md" onClick={handleSubmit}>Submit Review</Button>
                </Stack>
              </Card.Section>
            </Paper>
          </Container>
        </Box>
      </Wrapper>
    </>
  );
}
