const fsP = require("fs").promises;
const path = require("path");

// ! Promise Files

const fileOps = async () => {
  try {
    const data = await fsP.readFile(
      path.join(__dirname, "files", "name.txt", "utf-8", (data) => {
        console.log(data);
      })
    );
    await fsP.unlink(path.join(__dirname, "files", "name.txt"));
    await fsP.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    await fsP.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\n Nice to meet you"
    );
    await fsP.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "hello.txt")
    );
    const newData = await fsP.readFile(
      path.join(__dirname, "files", "hello.txt")
    );
    console.log(newData);
  } catch (e) {
    console.log(e);
  }
};
fileOps();
// fs.readFile(path.join(__dirname, "files", "name.txt"), "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");
//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "Hello World",
//       (err) => {
//         if (err) throw err;
//         console.log("Append Complete");

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "hello.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename Complete");
//           }
//         );
//       }
//     );
//   }
// );

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err} `);
  process.exit(1);
});
