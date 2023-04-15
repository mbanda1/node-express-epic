/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns a list of users.
 *     description: Optional extended description in CommonMark or HTML.
 *     responses:
 *       200:
 *         description: A JSON array of user objects.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       default:
 *         description: Unexpected error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
app.get('/users', (req, res) => {
    // Handle the request
  });
  