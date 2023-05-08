/*
# mongodb connection
>> create account
>> create an user with password
>> whitelist ip address
>> database > connect > driver > node> view all code
>> change the password in uri

# create - post
>> app.post('/users', async(req, res) => {})
>> make the function async await
>> don't forget to use app.use(express.json());
>> access the data from the body: const user = req.body
>> const result = await geassCollection.insertOne(user)
>> res.send(result)

# client side
>> create fetch
>> add second parameter as an object
>> provide method: 'POST'
>> add header: headers: {"Content-Type": "application/json",}
>> add body: body: JSON.stringify(user),

# important
>> const cursor = geassCollection.find();
>> const result = await cursor.toArray();

# delete
>> create: app.delete("/users/:id", async (req, res) =>{})
>> const query = { _id: new ObjectId(id) }
>> delete query: const result = await geassCollection.deleteOne(query)
*/
