import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Heading, Input, Text, useColorMode } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const Header = ({ todos, setTodos }) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; //월만 0부터 시작해서 한달이 당겨짐, 그래서 +1 해줘야함
  const day = now.getDay();

  const { register, handleSubmit, reset } = useForm();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "light" ? "white" : "gray.800";

  const onSubmit = (data) => {
    const { todo: text } = data;
    setTodos([
      ...todos, //이전의 내용을 불러옴, 대신 배열을 까서 내용만 (...)
      {
        id: Date.now(),
        title: text, //입력한 내용
        finish: false, //할일 완료하면 체크나 작대기 긋게 해주는 것
        date: `${year}년 ${month}월 ${day}일`,
      },
    ]);

    reset(); //리셋 메서드, 등록이 끝난 다음에는 지워줌
  };

  return (
    <Box bgColor={isDark}>
      <Heading>
        <Text>TODO</Text>

        <Box
          onClick={toggleColorMode}
          w="50px"
          h="50px"
          borderRadius={"30px 30px 30px 0"}
        >
          {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        </Box>

        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("todo", {
              required: "빈 내용은 안 돼요~🤔",
            })}
            placeholder="내용을 적어주세요."
            border={"1px solid #dbdbdb"}
          />
        </Box>
      </Heading>
    </Box>
  );
};
