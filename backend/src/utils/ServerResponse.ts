// A message can be a normal string message (most likely result if response was unsuccessful) but it can also be stringified data if the response was successful

type ServerResponse = {
    statusCode: number,
    success: boolean,
    message: string
}

export default ServerResponse;