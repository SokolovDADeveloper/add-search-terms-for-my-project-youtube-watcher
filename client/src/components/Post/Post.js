import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { deletePost } from '../../actions/postsActions';
import CardContentRow from './CardContentRow';
import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

const Post = ({ post, setCurrentId }) => {
  const {
    term,
    minViews,
    minRating,
    dateTimeUpload,
    addPlaylistMark,
    videosLength,
  } = post;

  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Typography className={classes.title} variant="h6">
        {term}
      </Typography>

      <CardContent className={classes.cardContent}>
        <CardContentRow
          icon={'❤'}
          contentLeft={'Минимальный рейтинг видео:'}
          contentRight={minRating}
        />
        <CardContentRow
          icon={'👀'}
          contentLeft={'Минимальное количество просмотров видео:'}
          contentRight={minViews}
        />
        <CardContentRow
          icon={'🖌'}
          contentLeft={'Добавить в плейлист содержащий фразу:'}
          contentRight={addPlaylistMark}
        />
        <CardContentRow
          icon={'⏱'}
          contentLeft={'Минимальное время загрузки видео:'}
          contentRight={dateTimeUpload}
        />
        <CardContentRow
          icon={'📼'}
          contentLeft={'Длина видео:'}
          contentRight={videosLength}
        />
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="secondary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" /> удалить
        </Button>

        <span>{moment(post.createdAt).fromNow()}</span>

        <IconButton
          title="редактировать"
          className={classes.editButton}
          onClick={() => setCurrentId(post._id)}
        >
          <EditOutlinedIcon color="primary" fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '3px',
    height: '100%',
    padding: '5px 5px 0px 10px',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    wordBreak: 'break-all',
    paddingBottom: '5px',
    lineHeight: '1.2rem',
    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
  },
  cardContent: {
    padding: '5px 5px 5px 0px',
  },
  cardActions: {
    borderTop: '1px solid rgba(0, 0, 0, 0.3)',
    padding: 0,
    height: '35px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: 'transparent',
  },
});

export default Post;
