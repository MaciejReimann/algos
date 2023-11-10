export class Point {
    constructor(readonly x: number, readonly y: number) {}

    equals(point: Point) {
        return this.x === point.x && this.y === point.y;
    }
}

const isWall = (point: Point, maze: string[], wall: string) =>
    !isOff(point, maze) && maze[point.y][point.x] === wall;

const isOff = (point: Point, maze: string[]) =>
    !maze[point.y] || !maze[point.y][point.x];

const isVisited = (point: Point, visited: boolean[][]) =>
    visited[point.y][point.x];

const isEnd = (point: Point, end: Point) => point.equals(end);

const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
] as const;
const move = (point: Point, direction: (typeof directions)[number]) =>
    new Point(point.x + direction[0], point.y + direction[1]);

//
export default function solve_maze(
    maze: string[],
    wall: string, // wall should be sth. that is not falsy, but OK
    start: Point, // this could be derived from maze
    end: Point, // this could be derived from maze
): Point[] {
    const visited: boolean[][] = [];
    const path: Point[] = [];

    maze.forEach((row) => {
        const fields = new Array(row.length).fill(false);
        visited.push(fields);
    });

    walk(maze, wall, start, end, visited, path);

    return path;
}

function walk(
    maze: string[],
    wall: string,
    currentPoint: Point,
    end: Point,
    visited: boolean[][],
    path: Point[],
) {
    // 1.Base case
    console.log("maze", maze);
    console.log("currentPoint", currentPoint);
    if (isWall(currentPoint, maze, wall)) {
        return false;
    }
    if (isOff(currentPoint, maze)) {
        return false;
    }
    if (isVisited(currentPoint, visited)) {
        return false;
    }
    if (isEnd(currentPoint, end)) {
        path.push(end);
        return true;
    }
    // 2.Recurse

    // - pre
    visited[currentPoint.y][currentPoint.x] = true;
    path.push(currentPoint); // try this point

    // - recurse: for each direction, try to do nextMove
    directions.forEach((direction) => {
        const nextPoint = move(currentPoint, direction);
        if (walk(maze, wall, nextPoint, end, visited, path)) {
            return true;
        }
        return false;
    });

    // -post
    path.pop(); // it was a bad move

    return true;
}
