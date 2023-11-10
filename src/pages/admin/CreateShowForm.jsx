import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography, MenuItem } from '@mui/material';
import axios from 'axios';

const ShowCreateForm = ({ onBack }) => {
    const [showDetails, setShowDetails] = useState({
        title: '',
        type: '',
        period: '',
        contentDetail: [],
        thumbnailUrl: '',
        price: '',
        venueName: '',
        showSchedules: [],
        showBanners: { bannerUrl: '', smallBannerUrl: '' }
    });

    // 날짜와 시간 포매팅 함수
    const formatDate = (dateArray) => {
        const [year, month, day] = dateArray;
        return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    };

    const formatTime = (timeArray) => {
        const [hours, minutes] = timeArray;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    };

    // 핸들러 함수들
    const handleInputChange = (e, field) => {
        setShowDetails({ ...showDetails, [field]: e.target.value });
    };

    const handleContentDetailChange = (e, index) => {
        const newContentDetails = [...showDetails.contentDetail];
        newContentDetails[index] = e.target.value;
        setShowDetails({ ...showDetails, contentDetail: newContentDetails });
    };

    const handleScheduleChange = (e, index, field) => {
        const newSchedules = showDetails.showSchedules.map((schedule, idx) => {
            if (idx === index) {
                let newValue = e.target.value;
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

    // 쇼 생성 처리 함수
    const handleSubmit = async () => {
        try {
            const url = 'http://localhost/show';
            const payload = {
                title: showDetails.title,
                type: showDetails.type,
                period: showDetails.period,
                contentDetail: showDetails.contentDetail,
                thumbnailUrl: showDetails.thumbnailUrl,
                price: showDetails.price,
                venueName: showDetails.venueName,
                showSchedules: showDetails.showSchedules.map(schedule => ({
                    scheduleDate: formatDate(schedule.scheduleDate),
                    scheduleTime: formatTime(schedule.scheduleTime)
                })),
                showBanners: showDetails.showBanners
            };

            await axios.post(url, payload);
            alert('새로운 쇼가 성공적으로 등록되었습니다.');
            onBack();
        } catch (error) {
            console.error('쇼 생성 실패:', error);
        }
    };

    return (
        <Grid container spacing={1} style={{ marginTop: '20px' }}>
            <Grid item xs={12} md={4}>
                <img
                    src={showDetails.thumbnailUrl || 'placeholder-image-url.jpg'}
                    alt="썸네일 미리보기"
                    style={{ width: '100%', height: 'auto', maxWidth: '250px' }}
                />
            </Grid>
            <Grid item xs={12} md={8}>
                <Paper style={{ padding: '16px' }}>
                    <Typography variant="h6" gutterBottom>
                        새로운 쇼 등록
                    </Typography>
                    <TextField
                        label="제목"
                        type="text"
                        fullWidth
                        margin="normal"
                        value={showDetails.title}
                        onChange={(e) => handleInputChange(e, 'title')}
                    />
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
                    <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '10px' }}>
                        등록
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );

};

export default ShowCreateForm;
