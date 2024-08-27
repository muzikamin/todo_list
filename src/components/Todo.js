import { Box, Checkbox, HStack, Text } from "@chakra-ui/react";

export const Todo = ({ todos, setTodos }) => {
  const onClickFinish = (id) => {
    console.log(id);
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              finish: !todo.finish,
            }
          : todo
      )
    );
  };

  return (
    <Box>
      {todos.length > 0 ? (
        <>
          {todos.map((data) => (
            <HStack
              key={data.id}
              borderRadius={20}
              h="70px"
              p="15px" //bgColor={isDark}
            >
              <Checkbox
                onChange={() => onClickFinish(data.id)}
                colorScheme="green"
                size={"lg"}
                isChecked={data.finish}
              >
                <Box>
                  <Text>{data.title}</Text>
                  <Text>{data.date}</Text>
                </Box>
              </Checkbox>
            </HStack>
          ))}
        </>
      ) : (
        <Text>할 일을 적어주세요! </Text>
      )}
    </Box>
  );
};
