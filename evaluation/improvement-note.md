# Improvement Note

## Weak Point Found
The main weak point in the earlier version of the app was handling unsupported or slightly varied user questions. While the app answered the four core topics well, it was less clear and less reliable when users asked about topics outside the supported scope.

## Evidence From Evaluation
The evaluation cases showed that the app performed well on direct questions such as "What is AI?" and "What is NLP?", but weaker cases appeared when the question was outside the supported topic list, such as "What is deep learning?" or "Tell me about robotics."

## Change Made
I improved the routing logic by making the topic matching more explicit and by adding a clearer fallback response for unsupported topics. This made the app better at deciding when it should answer and when it should clearly say that a topic is not supported.

## What Improved
After the improvement, the app produced clearer behavior on unsupported questions and was easier to evaluate. The final results were stronger because the system now avoids pretending to support topics that are outside the intended scope.

## What Is Still Weak
The app is still limited to a small set of AI study-note topics. It does not yet support broader AI concepts, uploaded files, retrieval from many documents, or open-ended general question answering.

## Future Improvement
If the project grows to include many files or many study topics, I would consider adding retrieval (RAG). That would help the app scale beyond a small fixed set of answers, but it would also add more storage, retrieval, debugging, and evaluation complexity.