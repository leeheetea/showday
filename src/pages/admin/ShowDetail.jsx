import React, {useEffect, useState} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Grid, Paper, Typography, MenuItem } from '@mui/material';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const ShowDetail = ({ show, onBack }) => {
    const [showDetails, setShowDetails] = useState(show);

    const formatDate = (dateArray) => {
        const [year, month, day] = dateArray;
        return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    };

    const formatTime = (timeArray) => {
        const [hours, minutes] = timeArray;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    };

    const handleScheduleChange = (e, index, field) => {
        console.log(showDetails.showBanners);
        const newSchedules = showDetails.showSchedules.map((schedule, idx) => {
            if (idx === index) {
                let newValue = e.target.value;

                // 날짜와 시간의 역변환 로직
                if (field === 'scheduleDate') {
                    newValue = newValue.split('-').map(Number);
                } else if (field === 'scheduleTime') {
                    const [hours, minutes] = newValue.split(':').map(Number);
                    newValue = [hours, minutes];
                }

                return { ...schedule, [field]: newValue };
            }
            return schedule;
        });
        setShowDetails({ ...showDetails, showSchedules: newSchedules });
    };


    const handleBack = () => {
        onBack();
    };

    useEffect(() => {
        setShowDetails(show);
    }, [show]);

    const handleInputChange = (e, field) => {
        // showBanners 내부의 속성을 업데이트하는 경우
        if (field.startsWith('showBanners.')) {
            const bannerField = field.split('.')[1];
            setShowDetails({
                ...showDetails,
                showBanners: {
                    ...showDetails.showBanners,
                    [bannerField]: e.target.value,
                },
            });
        } else {
            setShowDetails({ ...showDetails, [field]: e.target.value });
        }
    };

    const handleContentDetailChange = (e, index) => {
        const newContentDetails = [...showDetails.contentDetail];
        newContentDetails[index] = e.target.value;
        setShowDetails({ ...showDetails, contentDetail: newContentDetails });
    };

    const handleUpdate = async () => {
        try {
            const url = `http://localhost/show/${showDetails.showId}`;
            console.log(url);

            const payload = {
                showId: showDetails.showId,
                title: showDetails.title,
                type: showDetails.type,
                period: showDetails.period,
                contentDetail: showDetails.contentDetail,
                thumbnailUrl: showDetails.thumbnailUrl,
                price: showDetails.price,
                venue: { ...showDetails.venue },
                showSchedules: showDetails.showSchedules.map(schedule => ({
                    scheduleId: schedule.scheduleId,
                    scheduleDate: formatDate(schedule.scheduleDate),
                    scheduleTime: formatTime(schedule.scheduleTime)
                })),
                showBanners: { // showBanners 객체 직접 사용
                    showBannerId: showDetails.showBanners.showBannerId,
                    bannerUrl: showDetails.showBanners.bannerUrl,
                    smallBannerUrl: showDetails.showBanners.smallBannerUrl
                }
            };

            // POST 요청 보내기
            const response = await axios.post(url, payload);
            alert('업데이트가 성공적으로 처리되었습니다.');
            onBack();
            console.log(response.data);

            // 성공 시 처리 로직
        } catch (error) {
            console.error('업데이트 실패:', error);
            // 실패 시 처리 로직
        }
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');
        if (confirmDelete) {
            try {
                const url = `http://localhost/show/${showDetails.showId}`;
                console.log('삭제 요청 URL:', url);

                const response = await axios.delete(url);
                alert('삭제가 성공적으로 처리되었습니다.');
                onBack();
                console.log('삭제 응답:', response.data);

            } catch (error) {
                console.error('삭제 실패:', error);
            }
        }
    };


    return (
        <Grid container spacing={1} style={{ marginTop: '20px' }}> {/* Spacing reduced from 2 to 1 */}
            <Grid item xs={12} md={4}>
                <img
                    src={showDetails.thumbnailUrl}
                    alt="썸네일"
                    style={{ width: '100%', height: 'auto', maxWidth: '250px' }}
                />
            </Grid>
            <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={handleUpdate}>
                            수정
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" onClick={handleDelete}>
                            삭제
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={handleBack}>
                            목록
                        </Button>
                    </Grid>
                </Grid>
                <Paper style={{ padding: '16px' }}>
                    <Typography variant="h6" gutterBottom>
                        상세 정보
                    </Typography>
                    <TextField
                        label="제목"
                        type="text"
                        fullWidth
                        margin="normal"
                        value={showDetails.title}
                        onChange={(e) => handleInputChange(e, 'title')}
                    />
                    {/* Type select field */}
                    <TextField
                        select
                        label="유형"
                        fullWidth
                        margin="normal"
                        value={showDetails.type}
                        onChange={(e) => handleInputChange(e, 'type')}
                    >
                        <MenuItem value="musical">뮤지컬</MenuItem>
                        <MenuItem value="concert">콘서트</MenuItem>
                        <MenuItem value="theatre">연극</MenuItem>
                    </TextField>
                    <TextField
                        label="공연 기간"
                        type="text"
                        fullWidth
                        margin="normal"
                        value={showDetails.period}
                        onChange={(e) => handleInputChange(e, 'period')}
                    />
                    <TextField
                        label="가격"
                        type="number"
                        fullWidth
                        margin="normal"
                        value={showDetails.price}
                        onChange={(e) => handleInputChange(e, 'price')}
                    />
                    <TextField
                        label="장소 이름"
                        type="text"
                        fullWidth
                        margin="normal"
                        value={showDetails.venueName}
                        onChange={(e) => handleInputChange(e, 'venueName')}
                    />
                    <TextField
                        label="썸네일 URL"
                        type="text"
                        fullWidth
                        margin="normal"
                        value={showDetails.thumbnailUrl}
                        onChange={(e) => handleInputChange(e, 'thumbnailUrl')}
                    />
                    <TextField
                        label="대형배너 URL"
                        type="text"
                        fullWidth
                        margin="normal"
                        value={showDetails.showBanners.bannerUrl}
                        onChange={(e) => handleInputChange(e, 'showBanners.bannerUrl')}
                    />
                    <TextField
                        label="소형배너 URL"
                        type="text"
                        fullWidth
                        margin="normal"
                        value={showDetails.showBanners.smallBannerUrl}
                        onChange={(e) => handleInputChange(e, 'showBanners.smallBannerUrl')}
                    />
                    <Grid item xs={12}>
                        <Paper style={{ padding: '16px', marginTop: '20px' }}>
                            <Typography variant="h6" gutterBottom>
                                콘텐츠 상세 이미지 URL
                            </Typography>
                            {showDetails.contentDetail.map((url, index) => (
                                <TextField
                                    key={index}
                                    label={`이미지 URL ${index + 1}`}
                                    type="text"
                                    fullWidth
                                    margin="normal"
                                    value={url}
                                    onChange={(e) => handleContentDetailChange(e, index)}
                                />
                            ))}
                        </Paper>
                    </Grid>
                        <Grid item xs={12}>
                            <Paper style={{ padding: '16px', marginTop: '20px' }}>
                                <Typography variant="h6" gutterBottom>
                                    공연 스케줄
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>날짜</TableCell>
                                                <TableCell>시간</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {showDetails.showSchedules.map((schedule, index) => (
                                                <TableRow key={index}>
                                                    <TableCell component="th" scope="row">
                                                        <TextField
                                                            type="date"
                                                            value={formatDate(schedule.scheduleDate)}
                                                            onChange={(e) => handleScheduleChange(e, index, 'scheduleDate')}
                                                            fullWidth
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <TextField
                                                            type="time"
                                                            value={formatTime(schedule.scheduleTime)}
                                                            onChange={(e) => handleScheduleChange(e, index, 'scheduleTime')}
                                                            fullWidth
                                                        />
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ShowDetail;
